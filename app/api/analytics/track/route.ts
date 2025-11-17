import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

interface Analytics {
  users: {
    [key: string]: {
      userId: string;
      firstVisit: string;
      lastVisit: string;
      sessionDuration: number; // in seconds
      pageViews: number;
    };
  };
  totalSessions: number;
}

const ANALYTICS_FILE = path.join(process.cwd(), 'analytics.json');

async function getAnalytics(): Promise<Analytics> {
  try {
    const data = await fs.readFile(ANALYTICS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return {
      users: {},
      totalSessions: 0,
    };
  }
}

async function saveAnalytics(data: Analytics): Promise<void> {
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(data, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, sessionStart, sessionEnd } = body;

    if (!userId || !sessionStart) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const analytics = await getAnalytics();
    const now = new Date().toISOString();

    if (userId in analytics.users) {
      // Existing user
      const user = analytics.users[userId];
      user.lastVisit = now;
      if (sessionEnd && sessionStart) {
        const duration =
          (new Date(sessionEnd).getTime() -
            new Date(sessionStart).getTime()) /
          1000;
        user.sessionDuration = Math.max(user.sessionDuration, duration);
      }
      user.pageViews += 1;
    } else {
      // New user
      analytics.users[userId] = {
        userId,
        firstVisit: now,
        lastVisit: now,
        sessionDuration: 0,
        pageViews: 1,
      };
      analytics.totalSessions += 1;
    }

    await saveAnalytics(analytics);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Analytics tracking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const analytics = await getAnalytics();

    // Calculate aggregate stats
    const users = Object.values(analytics.users);
    const uniqueUsers = users.length;
    const avgSessionDuration =
      users.length > 0
        ? users.reduce((sum, u) => sum + u.sessionDuration, 0) / users.length
        : 0;
    const totalPageViews = users.reduce((sum, u) => sum + u.pageViews, 0);

    return NextResponse.json({
      uniqueUsers,
      totalPageViews,
      avgSessionDuration: Math.round(avgSessionDuration),
      totalSessions: analytics.totalSessions,
      users: users.sort(
        (a, b) =>
          new Date(b.lastVisit).getTime() - new Date(a.lastVisit).getTime()
      ),
    });
  } catch (error) {
    console.error('Analytics fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

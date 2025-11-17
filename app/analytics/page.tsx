'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Users, Clock, BarChart3 } from 'lucide-react';

interface User {
  userId: string;
  firstVisit: string;
  lastVisit: string;
  sessionDuration: number;
  pageViews: number;
}

interface AnalyticsData {
  uniqueUsers: number;
  totalPageViews: number;
  avgSessionDuration: number;
  totalSessions: number;
  users: User[];
}

export default function AnalyticsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
  const [loading, setLoading] = useState(false);

  const CORRECT_PASSWORD = 'Raptors';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      fetchAnalytics();
      setPassword('');
    } else {
      alert('Invalid password');
      setPassword('');
    }
  };

  const fetchAnalytics = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/analytics/track');
      const data = await response.json();
      setAnalytics(data);
    } catch (error) {
      console.error('Failed to fetch analytics:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAnalytics(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Analytics Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  autoFocus
                />
              </div>
              <Button type="submit" className="w-full">
                Access Analytics
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-slate-400">Website visitor statistics</p>
          </div>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>

        {loading ? (
          <div className="text-center text-white">Loading analytics...</div>
        ) : analytics ? (
          <>
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Unique Visitors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">
                    {analytics.uniqueUsers}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4" />
                    Total Page Views
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">
                    {analytics.totalPageViews}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-slate-300 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Avg. Session Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-white">
                    {analytics.avgSessionDuration}s
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Visitors */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Recent Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-4 text-slate-300">
                          Visitor ID
                        </th>
                        <th className="text-left py-2 px-4 text-slate-300">
                          First Visit
                        </th>
                        <th className="text-left py-2 px-4 text-slate-300">
                          Last Visit
                        </th>
                        <th className="text-left py-2 px-4 text-slate-300">
                          Duration (s)
                        </th>
                        <th className="text-left py-2 px-4 text-slate-300">
                          Page Views
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {analytics.users.slice(0, 20).map((user) => (
                        <tr
                          key={user.userId}
                          className="border-b border-slate-700 hover:bg-slate-700"
                        >
                          <td className="py-2 px-4 text-slate-200 font-mono text-xs">
                            {user.userId.substring(0, 8)}...
                          </td>
                          <td className="py-2 px-4 text-slate-300">
                            {new Date(user.firstVisit).toLocaleDateString()}
                          </td>
                          <td className="py-2 px-4 text-slate-300">
                            {new Date(user.lastVisit).toLocaleString()}
                          </td>
                          <td className="py-2 px-4 text-slate-300">
                            {Math.round(user.sessionDuration)}
                          </td>
                          <td className="py-2 px-4 text-slate-300">
                            {user.pageViews}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {analytics.users.length > 20 && (
                  <p className="text-slate-400 text-sm mt-4">
                    Showing 20 of {analytics.users.length} visitors
                  </p>
                )}
              </CardContent>
            </Card>
          </>
        ) : (
          <div className="text-center text-white">No analytics data yet</div>
        )}
      </div>
    </div>
  );
}

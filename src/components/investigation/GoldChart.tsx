"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';

const mockData = [
    { year: '1971', gold: 35, cpi: 40 },
    { year: '1980', gold: 850, cpi: 82 },
    { year: '1990', gold: 386, cpi: 130 },
    { year: '2000', gold: 279, cpi: 172 },
    { year: '2010', gold: 1226, cpi: 218 },
    { year: '2020', gold: 1800, cpi: 258 },
    { year: '2025', gold: 2050, cpi: 310 },
];

export function GoldChart() {
    return (
        <Card className="shadow-lg border-2 border-primary/20">
            <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-serif text-center">Gold Price vs. Purchasing Power (Indexed)</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={mockData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorGold" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#d4af37" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#d4af37" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="year" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" vertical={false} />
                            <Tooltip />
                            <Legend verticalAlign="top" height={36} />
                            <Area type="monotone" dataKey="gold" stroke="#d4af37" fillOpacity={1} fill="url(#colorGold)" name="Gold Price" />
                            <Area type="monotone" dataKey="cpi" stroke="#ef4444" fill="none" name="CPI (Inflation)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <p className="text-xs text-center text-muted-foreground mt-4">
                    Source: MacroTrends & BLS Data (1971-2025). Normalized for comparison.
                </p>
            </CardContent>
        </Card>
    )
}

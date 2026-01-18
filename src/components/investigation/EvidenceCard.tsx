import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/Badge"
import { FileText, Mic, Search, AlertTriangle, CheckCircle2 } from "lucide-react"

interface EvidenceCardProps {
    type: "audio" | "document" | "email" | "analysis";
    title: string;
    description: string;
    date: string;
    company: string;
    findings: "positive" | "negative" | "neutral";
}

export function EvidenceCard({ type, title, description, date, company, findings }: EvidenceCardProps) {
    const iconMap = {
        audio: <Mic className="w-5 h-5" />,
        document: <FileText className="w-5 h-5" />,
        email: <FileText className="w-5 h-5" />,
        analysis: <Search className="w-5 h-5" />
    }

    const colorMap = {
        positive: "bg-green-100 text-green-800 border-green-200",
        negative: "bg-red-100 text-red-800 border-red-200",
        neutral: "bg-gray-100 text-gray-800 border-gray-200"
    }

    return (
        <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4" style={{
            borderLeftColor: findings === 'positive' ? '#22c55e' : findings === 'negative' ? '#ef4444' : '#9ca3af'
        }}>
            <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                        {iconMap[type]}
                        <span className="capitalize">{type} Log</span>
                    </Badge>
                    <span className="text-xs text-muted-foreground">{date}</span>
                </div>
                <CardTitle className="text-lg font-bold text-primary">{title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1">
                    Target: <span className="font-semibold text-foreground">{company}</span>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-gray-600 mb-4">{description}</p>
                <div className={`p-3 rounded-md border text-sm flex items-center gap-2 ${colorMap[findings]}`}>
                    {findings === 'positive' ? <CheckCircle2 className="w-4 h-4 shrink-0" /> :
                        findings === 'negative' ? <AlertTriangle className="w-4 h-4 shrink-0" /> :
                            <Search className="w-4 h-4 shrink-0" />}
                    <span className="font-medium">
                        Verdict: {findings === 'positive' ? 'Passed' : findings === 'negative' ? 'Flagged' : 'Inconclusive'}
                    </span>
                </div>
            </CardContent>
        </Card>
    )
}

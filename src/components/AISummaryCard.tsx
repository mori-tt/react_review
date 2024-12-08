import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ThumbsUp, ThumbsDown, Pen } from "lucide-react";
// モックデータは削除 or コメントアウト
// import { mockAISummary as AISummary } from "@/constants/data";
import StarRating from "./StarRating";

import { Button } from "./ui/button";
import useAISummaryLogic from "@/hooks/useAISummaryLogic";

const AISummaryCard = () => {
  // カスタムフックの呼び出し
  const { averageRating, handleClick, AISummary } = useAISummaryLogic();

  return (
    <Card className="bg-gradient-to-br border-indigo-300 from-white to-indigo-50">
      <CardHeader className="text-center">
        <CardTitle className="text-lg">AIによるレビュー分析</CardTitle>
        <CardDescription className="text-xs">
          全レビューの総合的な洞察
        </CardDescription>
        <div className="flex items-center justify-center py-4">
          <span className="text-4xl font-bold mr-4">{averageRating}</span>
          <StarRating rating={Math.round(averageRating)} />
        </div>
      </CardHeader>

      {/* AI からの res があるかどうかで条件分岐 */}
      {AISummary === null ? (
        <CardContent className="flex justify-center">
          <Button onClick={handleClick}>Generate</Button>
        </CardContent>
      ) : (
        <CardContent>
          <Tabs defaultValue="summary" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="summary">
                <Pen className="mr-2 h-4 w-4" /> 要約
              </TabsTrigger>
              <TabsTrigger value="positive">
                <ThumbsUp className="mr-2 h-4 w-4" /> 評価ポイント
              </TabsTrigger>
              <TabsTrigger value="negative">
                <ThumbsDown className="mr-2 h-4 w-4" /> 改善点
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="summary"
              className="text-sm leading-loose text-gray-600 dark:text-gray-400"
            >
              {AISummary.summary}
            </TabsContent>
            <TabsContent value="positive">
              {AISummary.positivePoints.map((point, index) => (
                <Badge key={index} variant="outline" className="m-1">
                  {point}
                </Badge>
              ))}
            </TabsContent>
            <TabsContent value="negative">
              {AISummary.negativePoints.map((point, index) => (
                <Badge key={index} variant="destructive" className="m-1">
                  {point}
                </Badge>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      )}
    </Card>
  );
};

export default AISummaryCard;

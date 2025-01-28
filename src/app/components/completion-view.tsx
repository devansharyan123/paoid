import { Card, CardContent } from "@/components/ui/card";

export function CompletionView() {
  return (
    <div className="bg-gray-50 p-6 w-full">
      <Card className="w-full h-96">
        <CardContent className="p-6 w-full h-full flex items-center justify-center">
          {/* Header Navigation */}
          <h1 className="text-3xl font-semibold">Patch Analysis completed !</h1>
        </CardContent>
      </Card>
    </div>
  );
}

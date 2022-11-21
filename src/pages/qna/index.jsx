import PageLayout from "src/components/PageLayout";
import QnaTemplate from "@templates/QnaTemplate";
import Seo from "src/components/Seo";

export default function QnA() {
  return (
    <PageLayout title="QnA">
      <Seo title="QnA" />
      <QnaTemplate />
    </PageLayout>
  );
}

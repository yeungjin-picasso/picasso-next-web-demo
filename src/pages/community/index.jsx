import CommunityTemplate from "@templates/CommunityTemplate";
import PageLayout from "src/components/PageLayout";
import Seo from "src/components/Seo";

export default function Communities() {
  return (
    <PageLayout title="Community">
      <Seo title="Community" />
      <CommunityTemplate />
    </PageLayout>
  );
}

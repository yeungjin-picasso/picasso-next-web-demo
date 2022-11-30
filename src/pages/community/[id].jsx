import CommunityDetail from "@templates/CommunityDetail";
import { useRouter } from "next/router";
import PageLayout from "src/components/PageLayout";
import Seo from "src/components/Seo";

export default function Detail() {
  const { id } = useRouter().query;
  return (
    <PageLayout title="Community">
      <Seo title="Community" />
      <CommunityDetail id={id} />
    </PageLayout>
  );
}

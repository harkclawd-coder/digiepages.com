import { PageHeader } from "@/components/page-header";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <PageHeader
      title="That page is not on the map"
      intro="The link may be old or mistyped."
    >
      <Button href="/" arrow>Back to home</Button>
    </PageHeader>
  );
}

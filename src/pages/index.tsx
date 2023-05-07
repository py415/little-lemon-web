import CardTitle from "@/components/card-title/card-title";
import DisplayTitle from "@/components/display-title/display-title";
import HighlightText from "@/components/highlight-text/highlight-text";
import LeadText from "@/components/lead-text/lead-text";
import ParagraphText from "@/components/paragraph-text/paragraph-text";
import SectionCategories from "@/components/section-categories/section-categories";
import SectionTitle from "@/components/section-title/section-title";
import Subtitle from "@/components/subtitle/subtitle";

export default function Home() {
  return (
    <main>
      <DisplayTitle>Display Title - Medium 64pt</DisplayTitle>
      <Subtitle>Subtitle - Regular 40pt</Subtitle>
      <LeadText>Lead Text - Medium 18pt</LeadText>
      <SectionTitle>Section Title Uppercase - 20pt Extra Bold</SectionTitle>
      <SectionCategories>
        Section Categories - 16pt Extra Bold
      </SectionCategories>
      <CardTitle>Card Title - 18pt Bold</CardTitle>
      <ParagraphText>Paragraph - Regular 16pt</ParagraphText>
      <HighlightText>Highlight Text - Medium 16pt</HighlightText>
    </main>
  );
}

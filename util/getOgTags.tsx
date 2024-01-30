import { OgTagType } from "@/type/ogtag.type";
import { load } from "cheerio";

const getOgTags = async (url: string): Promise<OgTagType> => {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = load(html);

    const ogTags: OgTagType = {
      title: $('meta[property="og:title"]').attr("content") || "",
      description: $('meta[property="og:description"]').attr("content") || "",
      image: $('meta[property="og:image"]').attr("content") || "",
      siteName: $('meta[property="og:site_name"]').attr("content") || "",
    };
    return ogTags;
  } catch (error:any) {
    console.error("Error fetching OG tags:", error);
    return {
      title: "사이트 정보 가져오기 실패",
      description: error.message,
      image: "",
      siteName: "에러",
    };
  }
};

export default getOgTags;

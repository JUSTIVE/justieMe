import { useEffect } from "react";

interface HelmetProps {
  title?: string;
  description?: string;
  keywords?: string;
  themeColor?: string;
}

const Helmet: React.FC<HelmetProps> = ({
  title,
  description,
  keywords,
  themeColor,
}) => {
  useEffect(() => {
    // Set document title if provided
    if (title) {
      document.title = title;
    }

    // Set meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');

      if (!metaDescription) {
        metaDescription = document.createElement("meta");

        (metaDescription as HTMLMetaElement).name = "description";

        document.head.appendChild(metaDescription);
      }
      (metaDescription as HTMLMetaElement).content = description;
    }

    // Set meta keywords if provided
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');

      if (!metaKeywords) {
        metaKeywords = document.createElement("meta");

        (metaKeywords as HTMLMetaElement).name = "keywords";

        document.head.appendChild(metaKeywords);
      }
      (metaKeywords as HTMLMetaElement).content = keywords;
    }

    // Set theme color if provided
    if (themeColor) {
      let metaThemeColor = document.querySelector('meta[name="theme-color"]');

      if (!metaThemeColor) {
        metaThemeColor = document.createElement("meta");

        (metaThemeColor as HTMLMetaElement).name = "theme-color";

        document.head.appendChild(metaThemeColor);
      }
      (metaThemeColor as HTMLMetaElement).content = themeColor;
    }
  }, [title, description, keywords, themeColor]);

  return null; // This component does not render any visible UI
};

export { Helmet };

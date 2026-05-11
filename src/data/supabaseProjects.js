import { isSupabaseConfigured, supabase } from "../lib/supabaseClient";

const variantKeys = {
  desktop: "desktop",
  tablet: "tablet",
  mobile: "mobile",
  mobileSmall: "mobile-small",
  imageBlurred: "blurred",
};

export async function fetchProjectsFromSupabase() {
  if (!isSupabaseConfigured) {
    return [];
  }

  const { data, error } = await supabase
    .from("projects")
    .select(
      "id, slug, name, tagline, description, category, categories, main_image, gallery_images, created_at",
    )
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return data.map(mapProjectRow).filter(Boolean);
}

function mapProjectRow(row, index) {
  const orderedImages = [row.main_image, ...(row.gallery_images ?? [])].filter(Boolean);

  if (!orderedImages.length) {
    return null;
  }

  return {
    id: index + 1,
    databaseId: row.id,
    slug: row.slug,
    desktop: collectVariantUrls(orderedImages, variantKeys.desktop),
    tablet: collectVariantUrls(orderedImages, variantKeys.tablet),
    mobile: collectVariantUrls(orderedImages, variantKeys.mobile),
    mobileSmall: collectVariantUrls(orderedImages, variantKeys.mobileSmall),
    imageBlurred: collectVariantUrls(orderedImages, variantKeys.imageBlurred),
    title: row.name,
    tagline: row.tagline,
    tag: formatCategories(row.categories, row.category),
    desc: row.description,
  };
}

function collectVariantUrls(images, variantKey) {
  return images
    .map((image) => image?.variants?.[variantKey]?.url)
    .filter(Boolean);
}

function formatCategories(categories, fallbackCategory) {
  const values = Array.isArray(categories) && categories.length ? categories : [fallbackCategory];

  return values.filter(Boolean).join(" | ");
}

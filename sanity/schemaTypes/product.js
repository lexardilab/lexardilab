export const product = {
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name", // Use the "name" field as the source for generating the slug
        maxLength: 200, // Adjust the maximum length as needed
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true, // Allows selecting a hotspot for cropping
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "extraImages",
      title: "Extra Images",
      type: "array",
      of: [{ type: "image" }],
    },

    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "ref",
      title: "Ref",
      type: "string",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "sku",
      title: "Sku",
      type: "string",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [
        {
          type: "reference",
          to: { type: "category" },
        },
      ],
    },
    {
      name: "colors",
      title: "Colors",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: ["Opal", "Black", "Blue", "Heather Grey", "Natural"], // Add your color options
          },
        },
      ],
    },
    {
      name: "sizes",
      title: "Sizes",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: ["S", "M", "L", "XL", "XXL", "Unica"], // Add your color options
          },
        },
      ],
    },
  ],
};

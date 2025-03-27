import mdx from "@next/mdx";

const withMDX = mdx({
	extension: /\.mdx?$/,
	options: {},
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "md", "mdx"],
	trailingSlash: true,
	output: "export",
};

export default withMDX(nextConfig);

import { Bracket } from "@thirdbracket/bracketui";
import PageHeader from "../../../components/PageHeader";
import Image from "next/image";

function BlogCard({
  title,
  excerpt,
  date,
  author,
  image,
}: {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{author}</span>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const posts = [
    {
      title: "Understanding Modern Web Development",
      excerpt: "An overview of current trends...",
      date: "2024-01-15",
      author: "John Doe",
      image: "/website.svg",
    },
    // Add more blog posts
  ];

  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <PageHeader
          title="Blog"
          description="Insights and updates from our team"
        />
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </Bracket>
    </main>
  );
}

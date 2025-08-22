import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { formatDate } from "@/lib/utils";
import MDXContent from "@/components/mdx-content";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { getProjectBySlug, getProjects } from "@/lib/projects";
import { CarouselDemo } from "@/components/carousel";

type Params = { slug: string };
type Props = { params: Params };

export async function generateStaticParams(): Promise<Params[]> {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const awaitedParams = await params;
  const project = await getProjectBySlug(awaitedParams.slug);
  if (!project) {
    return { title: "Project not found" };
  }

  const { metadata } = project;
  const { title, image } = metadata;

  return {
    title: title ?? awaitedParams.slug,
    openGraph: {
      title: title ?? awaitedParams.slug,
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default async function Project({ params }: Props) {
  const awaitedParams = await params;
  const { slug } = awaitedParams;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, author, publishedAt, images } = metadata;

  return (
    <section className="pt-6">
      <div className="container">
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to projects</span>
        </Link>

        {image && (
          <div className="relative mb-6 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || ""}
              className="object-cover"
              fill
            />
          </div>
        )}

        <header>
          <h1 className="text-custom-900">{title}</h1>
          <p className="mt-3 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? "")}
          </p>
        </header>
        <main className="prose dark:prose-invert">
          <section className="flex flex-col lg:flex-row justify-between gap-8 mt-16 w-full">
            <div className="w-full lg:w-2/3 min-w-0">
              <MDXContent source={content} />
            </div>
            <div className="w-full lg:w-1/3 min-w-0">
              <CarouselDemo images={images ?? []} />
            </div>
          </section>
        </main>
      </div>
    </section>
  );
}

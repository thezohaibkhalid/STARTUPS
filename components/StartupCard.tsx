import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
type StartupTypeCard = {
  _createdAt: string;
  views: number;
  author: {
    _id: string;
    name: string;
  };
  title: string;
  category: string;
  _id: string;
  description: string;
  image: string;
};
const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: authodId, name },
    title,
    category,
    _id: postId,
    description,
    image,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authodId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${postId}`}>
            {" "}
            <h3 className="text-26-semibold">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authodId}`}>
          <Image
            src={"https://placeholder.co/48x48"}
            alt="Placeholder"
            height={48}
            width={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${postId}`}>
        <p className="startup-card-desc"> {description}</p>

        <Image
          src={image}
          alt={title}
          className="startup-card_img"
          width={600}
          height={400}
          layout="responsive"
        />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`?/query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${authodId}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;

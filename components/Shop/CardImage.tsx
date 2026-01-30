import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function CardImage({title, description, imgSrc, price}: {title: string, description: string, imgSrc: string, price: number}) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden hover:scale-[101%] transition-transform">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <picture>
        <img
          src={imgSrc}
          alt={title}
          className="relative z-20 aspect-video w-full object-contain brightness-60 grayscale dark:brightness-40 p-4"
        />
      </picture>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">${price}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View</Button>
      </CardFooter>
    </Card>
  )
}

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

export function CardImage() {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden hover:scale-[101%] transition-transform">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <picture>
        <img
          src="https://plus.unsplash.com/premium_photo-1679864782376-bdbbb87d9027?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
      </picture>
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">$200</Badge>
        </CardAction>
        <CardTitle>Earphones UzbTech</CardTitle>
        <CardDescription>
          EarNawushnil promax fax pax UzebTech Hightech waterproof no noise, shpoise, best earphones
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">View Event</Button>
      </CardFooter>
    </Card>
  )
}

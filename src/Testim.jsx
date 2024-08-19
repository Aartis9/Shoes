import { Card } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import Navbare from "./Navbare"

function Testim() {
  return ( <>
  <Navbare/>
    <section className="w-full bg-[#333335] py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl pr-[52vw] pb-[6vh] text-white font-bold tracking-tighter sm:text-4xl md:text-5xl">Customers Reviews</h2>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6 text-left bg-[#232227] text-white">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div>
                  <p className="text-lg font-semibold">John Doe</p>
                  <p className="text-sm text-muted-foreground">CEO, Acme Inc.</p>
                </div>
                <blockquote className="text-lg font-medium leading-relaxed">
                  "The platform has been a game-changer for our business. It's\n easy to use and has helped us scale our
                  operations\n effortlessly." ★★★★☆
                </blockquote>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#232227] text-white text-left">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div>
                  <p className="text-lg font-semibold">Jane Smith</p>
                  <p className="text-sm text-muted-foreground">Head of Engineering, Acme Inc.</p>
                </div>
                <blockquote className="text-lg font-medium leading-relaxed">
                  "The platform's built-in collaboration tools have made it\n easier for our team to work together and
                  ship features\n faster." tools    ★★★★☆
                </blockquote>
              </div>
            </div>
          </Card>
          <Card className="p-6 bg-[#232227] text-white text-left">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div>
                  <p className="text-lg font-semibold">Michael Johnson</p>
                  <p className="text-sm text-muted-foreground">CTO, Acme Inc.</p>
                </div>
                <blockquote className=" font-medium leading-relaxed">
                  "The platform's scalability and performance have been crucial for our growing business. We couldn't
                  be happier with our choice."  ★★★★☆
                </blockquote>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
    </>
  )
}
export default Testim
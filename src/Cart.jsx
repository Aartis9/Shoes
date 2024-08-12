import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import s8 from './assets/s8.png'
import s1 from './assets/s1.png'
import s7 from './assets/s7.png'
import './Cart.css'

function Cart() {
  return (<>

    <div className="min-h-[100vh] grid grid-cols-1 md:grid-cols-[1fr_400px] bg-[#4e4e52] text-white gap-6 p-4  md:p-8">

      <div className="flex flex-col ml-10 gap-6">

        <div className="grid gap-4">
          <h1 className="text-2xl font-bold  mt-6">Your Shopping Cart.</h1>

          <div className="grid gap-3">
            <div className="flex items-center justify-between bg-[#333335] p-2 rounded-xl">
              
              <div className="flex items-center  gap-4">
                <img src={s8} alt="Product Image" width={64} height={64} className="rounded-md " />
                <div>
                  <h6 className="font-small ">NIKE AIR VAPORMAX</h6>
                  <p className="text-[#4e7e50]">Size 8.5</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <MinusIcon className="h-4 w-4 text-black" />
                </Button>
                <span className="text-[1.3rem]" >1</span>
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-4 text-black" />
                </Button>
              </div>
              <div className="font-medium pr-[2vw]">$49.99</div>
            </div>
            <div className="flex items-center justify-between bg-[#333335] p-2 rounded-xl">
              <div className="flex items-center gap-4">
                <img src={s1} alt="Product Image" width={64} height={64} className="rounded-md" />
                <div>
                  <h3 className="font-medium">NIKE AIR VAPORMAX</h3>
                  <p className="text-[#4e7e50]">Size 8.5</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <MinusIcon className="h-4 w-4 text-black" />
                </Button>
                <span className="text-[1.3rem]" >2</span>
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-4 text-black" />
                </Button>
              </div>
              
              <div className="font-medium pr-[2vw]">$29.99</div>
            </div>
            <div className="flex items-center justify-between bg-[#333335] p-1  rounded-xl">
              <div className="flex items-center gap-4">
                <img src={s7} alt="Product Image" width={64} height={64} className="rounded-md" />
                <div>
                  <h3 className="font-medium">NIKE AIR VAPORMAX</h3>
                  <p className="text-[#4e7e50]">Size 8.5</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                  <MinusIcon className="h-4 w-4 text-black" />
                </Button>
                <span className="text-[1.3rem]" >3</span>
                <Button variant="outline" size="icon">
                  <PlusIcon className="h-4 w-4 text-black" />
                </Button>
              </div>
              
              <div className="font-medium pr-[2vw]">$29.99</div>
            </div>            
          </div>

        </div>

        <div className="grid gap-4">
          <Separator />
          <div className="flex items-center justify-between">
            <h5 className="text-xl font-bold"> Back to Shop</h5>
            <div className="text-2xl pr-[1vw]">Total: $109.97</div>
          </div>
        </div>

      </div> 



      <div className="grid gap-6">
        <Card className="pymnt">
          <CardHeader >
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input id="card-number" placeholder="0000 0000 0000 0000" />
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="grid gap-2 ">
                <Label htmlFor="expiration-date">Expiration Date</Label>
                <div className="flex gap-2 text-black">
                  <Select >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="MM" />
                    </SelectTrigger>
                    <SelectContent >
                      <SelectItem value="01">01</SelectItem>
                      <SelectItem value="02">02</SelectItem>
                      <SelectItem value="03">03</SelectItem>
                      <SelectItem value="04">04</SelectItem>
                      <SelectItem value="05">05</SelectItem>
                      <SelectItem value="06">06</SelectItem>
                      <SelectItem value="07">07</SelectItem>
                      <SelectItem value="08">08</SelectItem>
                      <SelectItem value="09">09</SelectItem>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="11">11</SelectItem>
                      <SelectItem value="12">12</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="YY" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="24">24</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="26">26</SelectItem>
                      <SelectItem value="27">27</SelectItem>
                      <SelectItem value="28">28</SelectItem>
                      <SelectItem value="29">29</SelectItem>
                      <SelectItem value="30">30</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full rounded-3xl ">Buy</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    </>
  )
}

function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
export default Cart
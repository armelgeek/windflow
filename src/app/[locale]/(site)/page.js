"use client";

import axios from "axios";
import Image from "next/image";

export default function Home() {
    const buyProduct1 = async () => {
      const response = await axios.post("https://api.lemonsqueezy.com/v1/checkouts", {
        data: {
          type: "checkouts",
          attributes: {
            checkout_data: {
              custom: {
                user_id: "123",
              },
            },
          },
          relationships: {
            store: {
              data: {
                type: "stores",
                id: "87066",
              },
            },
            variant: {
              data: {
                type: "variants",
                id: "383941",
              },
            },
          },
        },
      }, 
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiJjNTJkMDA1ZWEyNzZlYTEwNDc5MzUwZTFlYzFiNjNmZGY5NDAzNzk5MjFkZDU3N2U0YTRmOTkzZTFmMGIxMzk4ZDYzYzdhNmZlNTQyNTc3ZSIsImlhdCI6MTcxNTk2NjU3OC44NjUzNjksIm5iZiI6MTcxNTk2NjU3OC44NjUzNzIsImV4cCI6MjAzMTQ5OTM3OC44NDE2NzIsInN1YiI6IjIzNzg2OTIiLCJzY29wZXMiOltdfQ.dzqpBLsPUFW0Z2FkNDbCTKHuuTh3x3erS6PMElWaAHIOLugoA6NrtZtDmBJz2DCl7tXuDLkzGEdRHhRucO3rJU3zzPDOdfCC8s7YB9j8Gqy45Hpq9UFFGECN6qm3HARVpQn4BrOgPCQo6cOagfI852qTUwpyppBLNmUCP6TPzaeXNEyxo1EyejfWBcEZWsZE09igOucwJwLd9UyCWz8h5Bk_v8ZYZIp9iBhOilfYu1t6buz1rmqciscdyFpjoIdExj2TdkaIlShq87jRFPYUONNKv63Y5iXbqkN4mXfR-nQDcEHbSzCGlw92c3ZA0ZWk8cAZtbquI4GduLz5OQn32lmB7s2pwdFq0q5HzUaFTq0K8wboPTCGK-FCVesSdKo5MQYSkYjdzzr9BDd1lVKN_bM8Bj7YqimedwbS1fmW9f2bNQOkYpLP1fdeN4t2jym9S2QWDyVFGMJ-rZjeAn-bO61qPCDIYACuVol-8HvB16BqWCwdMiyzLDmmLsBME_15`,
        }
  
      });
      console.log('checkout',response.data.data.attributes.url)
      window.open(response.data.data.attributes.url, "_blank");
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={buyProduct1} className="p-3 border border-white">
        Buy product #1 for 1500 INR
      </button>
    </main>
  );
}

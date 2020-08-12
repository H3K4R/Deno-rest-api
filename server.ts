import {serve} from "https://deno.land/std/http/server.ts";

const s = serve({port: 3000});

for await (const req of s){
    req.respond({body: "Hey Swarnava , How about Deno"});
}
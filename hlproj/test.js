import micro from "micro";
import test from "ava";
import app from "./index";
import listen from "test-listen";
import request from "request-promise";

test("init tests", async t => {
    const service = micro(app);

    const body = await request(await listen(service));
    // console.dir(body);

    t.deepEqual(JSON.parse(body), { title: "Welcome to Micro" });
    service.close();
});

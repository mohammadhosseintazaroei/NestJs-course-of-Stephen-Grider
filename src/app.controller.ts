import { Controller, Get } from "@nestjs/common";

@Controller("/app")
export class AppController {
  @Get()
  getRootRoute() {
    return "hhi nestyii";
  }

  @Get("/bye")
  bye() {
    return "bye";
  }
}

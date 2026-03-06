export default {
  async scheduled(event: ScheduledEvent, env: unknown, ctx: ExecutionContext) {
    console.log("scheduled job executed", event.scheduledTime);
  }
};

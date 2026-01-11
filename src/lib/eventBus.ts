type EventHandler = (payload: any) => Promise<void>;

class EventBus {
  private handlers: Record<string, EventHandler[]> = {};

  subscribe(event: string, handler: EventHandler) {
    if (!this.handlers[event]) {
      this.handlers[event] = [];
    }
    this.handlers[event].push(handler);
  }

  async publish(event: string, payload: any) {
    const handlers = this.handlers[event] || [];
    for (const handler of handlers) {
      // fire and forget
      handler(payload).catch(console.error);
    }
  }
}

export const eventBus = new EventBus();

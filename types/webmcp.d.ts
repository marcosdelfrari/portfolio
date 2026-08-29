interface ModelContextTool {
  name: string;
  description: string;
  title?: string;
  inputSchema?: Record<string, unknown>;
  execute: (
    input: Record<string, unknown>,
  ) => Promise<unknown> | unknown;
}

interface ModelContextRegisterToolOptions {
  signal?: AbortSignal;
  exposedTo?: string[];
}

interface ModelContext {
  registerTool(
    tool: ModelContextTool,
    options?: ModelContextRegisterToolOptions,
  ): Promise<void>;
  getTools(options?: { includeSubframes?: boolean }): Promise<unknown[]>;
  executeTool(
    tool: unknown,
    inputObject?: object,
    options?: unknown,
  ): Promise<string>;
  ontoolchange: ((event: Event) => void) | null;
}

interface Document {
  modelContext: ModelContext;
}

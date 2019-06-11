declare namespace WebAssembly {
    interface ExportedFunction {
        (...args: any): any;
    }
    class Module {}
    interface TableDescriptor {
        element: 'anyfunc';
        initial: number;
        maximum?: number;
    }
    class Table {
        constructor(tableDescriptor: TableDescriptor);
        length: number;
        get(index: number): ExportedFunction;
        grow(number: number): number;
        set(index: number, value: ExportedFunction): void;
    }
    interface MemoryDescriptor {
        initial: number;
        maximum?: number;
    }
    class Memory {
        buffer: ArrayBuffer;
        constructor(memoryDescriptor: MemoryDescriptor);
        grow(pages: number): void;
    }
    class Instance {
        readonly exports: Record<string, ExportedFunction>;
        constructor(module: Module, importObject: any);
    }
}

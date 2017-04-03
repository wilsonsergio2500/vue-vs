namespace Helpers {

    export class ReflectionMethods {

        static NameOF<T>(callback: (ob: T) => any) : string {
            return /\.([^\.;]+);?\s*\}$/.exec((callback as any).toString())[1];
        }
    }
}

export { Helpers as Helpers }
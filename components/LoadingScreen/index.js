// components/LoadingScreen.js
export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
            <div className="flex space-x-2 animate-bounce">
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            </div>
        </div>
    );
}

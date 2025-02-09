'use client'
import { useState } from "react";
import { Button, Container, Title, List, SearchInput} from "@/shared/ui";
import { Navbar } from "@/widgets/navbar";

interface Board {
    id: number;
    name: string;
}

export default function BoardsPage() {
    const [ boards, setBoards ] = useState<Board[]>([]);

    const createBoard = () => {
        const newBoard: Board = {
            id: Date.now(),
            name: `Новая доска ${boards.length + 1}`,
        };
        setBoards([...boards, newBoard]);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const boardTemplate = (item: any) => (
        <div 
            key={item.id} 
            className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer border border-gray-200"
        >
            <h3 className="text-lg font-medium text-gray-700">{item.name}</h3>
        </div>
    );

    const plusButton = (
        <div 
            onClick={createBoard}
            className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 cursor-pointer border border-gray-200 flex justify-center items-center"
        >
            <span className="text-4xl text-gray-500">+</span>
        </div>
    );

    return (
        <Navbar>
            <Container>
                <div className="min-h-[100%] mt-5">
                    <header className="flex items-center justify-between mb-10">
                        <Title
                            tag="h2"
                            size="l"
                        >
                            Ваши доски
                        </Title>
                        <SearchInput />
                    </header>
                    
                    {boards.length === 0 ? (
                        <div className="flex flex-col items-center gap-4">
                            <p>Доски отстутствуют</p>
                             <Button 
                                onClick={createBoard} 
                                className="mb-6 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 max-w-[180px]"
                            >
                                Создать доску
                            </Button>
                        </div>
                        
                    ) : (
                        <div className="w-full">
                            <List
                                data={boards}
                                itemContentRender={boardTemplate}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                                additionalСomponent={plusButton}
                            />
                        </div>
                    )}
                </div>
            </Container>
        </Navbar>
    );
}

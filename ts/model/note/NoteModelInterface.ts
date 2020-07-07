interface NoteModelInterface
{
    addNote(id: number, content: string): boolean;
    getId: number;
    getContent: string;
}
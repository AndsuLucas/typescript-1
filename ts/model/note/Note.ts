class Note implements NoteModelInterface 
{   
    private id: number;
    private content: string;

    public addNote(id: number, content: string): boolean
    {
        return true
    }

    get getContent(): string
    {
        return this.content
    }

    get getId(): number
    {
        return this.id
    }
}
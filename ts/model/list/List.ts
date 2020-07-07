class Lists implements ListModelInterface 
{
   private notes: Note[] = []

   public getNotes(): Note[]
   {
        return [].concat([this.notes]);
   }
}
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function AddComponent({openDilog,setopenDilog,loading,setloading,blogFormData,setblogFormData,handleSaveData}) {
   
  return (
    <div>
        <Button onClick={()=>setopenDilog(true)}>Opne Dilog</Button>
      <div className="">
        <Dialog open={openDilog} onOpenChange ={setopenDilog}>
          <form>
            <DialogContent className="sm:max-w-[425px]">
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Title</Label>
                  <Input name='title' placeholder='Add Blog data' value={blogFormData.title} onChange={(e)=>setblogFormData({
                    ...blogFormData,title:e.target.value
                  })} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Description</Label>
                  <Input
                    name='description' placeholder='Add Blog data' value={blogFormData.description} onChange={(e)=>setblogFormData({
                    ...blogFormData,description:e.target.value
                  })}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={handleSaveData} type="submit">{loading? "Saving changes":'Save changes'}</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    </div>
  )
}

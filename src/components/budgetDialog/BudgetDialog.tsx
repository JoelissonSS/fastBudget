import {

  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Dialog,
  DialogTrigger,
} from '@radix-ui/react-dialog';
import { DialogHeader } from '../ui/dialog';
import { Button } from '../ui/button';
import { useGlobalContext } from '../budgetMenu/BudgetContext';

const BudgetDialog = () => {

  const { budget } = useGlobalContext()
  return (
    <Dialog>
          <DialogTrigger>
            <Button>Confirmar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Orçamento Rápido</DialogTitle>
              <DialogDescription >
                {budget}
              </DialogDescription>
              <DialogClose> Sair </DialogClose>
            </DialogHeader>
          </DialogContent>
        </Dialog>
  );
};

export default BudgetDialog;

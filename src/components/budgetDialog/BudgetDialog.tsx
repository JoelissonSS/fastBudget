import {
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
  Dialog,
  DialogTrigger,
} from '@/components/ui/dialog';
import { DialogHeader } from '../ui/dialog';
import { Button } from '../ui/button';
import { useGlobalContext } from '../budgetMenu/BudgetContext';
import React from 'react';
import handleCopyText from './copy';

const BudgetDialog = () => {
  const budgetsection = React.useRef<HTMLParagraphElement>(null);
  const { budget } = useGlobalContext();
   React.useEffect(() => {
        budget? handleCopyText(budgetsection.current?.innerText): null
      }, [budget])
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Confirmar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Orçamento Rápido</DialogTitle>
          <DialogDescription ref={budgetsection}>{budget}</DialogDescription>
          <DialogClose> Sair </DialogClose>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default BudgetDialog;

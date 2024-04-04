import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { format, addDays, formatDistance } from 'date-fns';
import { ReactElement, useState } from 'react';

export default function BudgetMenu() {
  const { register, handleSubmit } = useForm();
  let [budget, SetBudget] = useState<ReactElement>();

  interface AccommodationTypes {
    [key: string]: string[];
  }
  function handleaccommodation(accommodation: string): string[] {
    const accommodationOpt: AccommodationTypes = {
      'Suíte Master': [
        'Frigo bar',
        'Ar condicionado',
        'Ventilador',
        'Banheiro privado',
        'Chuveiro quente',
        'Roupa de cama e banho',
        'Sacada/Varanda',
        'TV',
      ],
      'Suíte Inter': [
        'Ar condicionado',
        'Ventilador',
        'Banheiro privado',
        'Chuveiro quente',
        'Roupa de cama e banho',
        'TV',
      ],
      'Suíte Simples': [
        'Ventilador',
        'Banheiro privado',
        'Chuveiro quente',
        'Roupa de cama e banho',
        'TV',
      ],
      'Quarto Simples': [
        'Ventilador',
        'Banheiro Compartilhado',
        'Roupa de cama e banho',
      ],
    };

    return accommodationOpt[accommodation];
  }

  const handleCopyText = () => {
    setTimeout(copy, 100);

    function copy() {
      const tagforcopy: any =
        document.querySelector<HTMLElement>('#BudgetCopy')?.innerText;
      navigator.clipboard.writeText(tagforcopy);
    }
  };

  function HandleBudGet(data: any) {
    const entryDate = format(addDays(data.entryDate, 1), 'dd/MM/yyyy');
    const exitDate = format(addDays(data.exitDate, 1), 'dd/MM/yyyy');
    const days = formatDistance(
      addDays(data.entryDate, 1),
      addDays(data.exitDate, 1),
    ).substring(1, 0);
    const budget = (
      <div>
        <h2>*Pousada e Camping Ilha do Mel*</h2> <br />
        *Orçamento para {entryDate} a {exitDate}* <br /> <br />
        Para {`${data.adults} Adultos `}
        {data.childs>0?`${data.childs} Crianças`: false} <br />
        {`${days} diária(s)`} {`na(o) ${data.accommodation}`} <br />
        {`No valor de R$ ${data.price},00`} <br /> <br />
        *Incluso:*
        {handleaccommodation(data.accommodation).map((itemInclude) => {
          return (
            <ul>
              <li>ㅤㅤ{itemInclude}</li>
            </ul>
          );
        })}{' '}
        
        *Com acesso à:* <br />
        ㅤㅤPicina <br />
        ㅤㅤChurrasqueira <br />
        ㅤㅤPlayground <br />
        ㅤㅤCozinha comunitária <br />
        ㅤㅤEstacionamento <br /> 
        ㅤㅤWi-fi <br /> <br />

        *Aceitamos pets de pequeno porte*
        *Check-in a partir das 16h, check-out até às 14h* <br /> <br />
        *Para a confirmação da reserva é necessário 50% do valor do orçamento*
      </div>
    );
    SetBudget(budget);
    handleCopyText();
  }

  return (
    <div>
      <form onSubmit={handleSubmit(HandleBudGet)} className="w-72 mx-auto ">
        <div>
          <Label>
            Data de entrada
            <Input
              className="inline-block"
              type="date"
              {...register('entryDate')}
            />
          </Label>
          <Label>
            Data de saída
            <Input
              className="inline-block"
              type="date"
              {...register('exitDate')}
            />
          </Label>
        </div>
        <select {...register('adults')}>
          <option value="1">1 Adultos</option>
          <option value="2" selected>
            2 Adultos
          </option>
          <option value="3">3 Adultos</option>
          <option value="4">4 Adultos</option>
          <option value="5">5 Adultos</option>
        </select>
        <select {...register('childs')}>
          <option value="0" selected>
            0 Crianças
          </option>
          <option value="1">1 Crianças</option>
          <option value="2">2 Crianças</option>
          <option value="3">3 Crianças</option>
          <option value="4">4 Crianças</option>
          <option value="5">5 Crianças</option>
        </select>
        <select {...register('accommodation')}>
          <option value="Suíte Master" selected>
            Suíte Master
          </option>
          <option value="Suíte Inter">Suíte Inter</option>
          <option value="Suíte Simples">Suíte Simples</option>
          <option value="Quarto Simples">Quarto simples</option>
        </select>

        <Input required type="number" {...register('price')} />

        <Dialog>
          <DialogTrigger>
            <Button>Confirmar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Orçamento Rápido</DialogTitle>
              <DialogDescription id="BudgetCopy">{budget}</DialogDescription>
              <DialogClose> Sair </DialogClose>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </form>
    </div>
  );
}

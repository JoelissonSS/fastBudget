import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';
import Dialog from '@/components/budgetDialog/BudgetDialog';
import { useLocalStorage } from 'usehooks-ts';

import { format, addDays, formatDistance } from 'date-fns';
import { useState } from 'react';
import handleaccommodation from './budgetopt';
import { BudgetContext } from './BudgetContext';
import React from 'react';
type budgetProps = {
  accommodation: string;
  adults: number;
  childs: number;
  entryDate: string;
  exitDate: string;
  price: number;
};
export default function BudgetMenu() {
  const { register, handleSubmit } = useForm<budgetProps>();
  let [budget, SetBudget] = useState<JSX.Element>();
  const nameRef = React.useRef<HTMLInputElement>(null);
  const [name, setName] = useLocalStorage<string | undefined>('name', '');
  function handleName() {
    setName(nameRef.current?.value);
  }

  function handleBudGet(data: budgetProps) {
    const entryDate = format(addDays(data.entryDate, 1), 'dd/MM/yyyy');
    const exitDate = format(addDays(data.exitDate, 1), 'dd/MM/yyyy');
    const days = formatDistance(
      addDays(data.entryDate, 1),
      addDays(data.exitDate, 1),
    ).substring(1, 0);
    SetBudget(
      <div>
        <h2>*{name}*</h2> <br />
        *Orçamento para {entryDate} a {exitDate}* <br /> <br />
        Para {`${data.adults} Adultos `}
        {data.childs > 0 ? `${data.childs} Crianças` : null} <br />
        {`${days} diária(s)`} {`na(o) ${data.accommodation}`} <br />
        {`No valor de R$ ${data.price},00`} <br /> <br />
        *Incluso:*
        {handleaccommodation(data.accommodation).map((itemInclude) => {
          return (
            <ul>
              <li>ㅤㅤ{itemInclude}</li>
            </ul>
          );
        })}
        *Com acesso à:* <br />
        ㅤㅤPiscina <br />
        ㅤㅤPlayground <br />
        ㅤㅤCozinha comunitária <br />
        ㅤㅤEstacionamento <br />
        ㅤㅤWi-fi <br /> <br />
        *Aceitamos pets de pequeno porte* <br />
        *Check-in a partir das 16h, check-out até às 14h* <br />
        *Para a confirmação da reserva é necessário 50% do valor do orçamento*
      </div>,
    );
  }

  return (
    <BudgetContext.Provider value={{ budget }}>
      <div className="h-screen flex place-items-center ">
        <form onSubmit={handleSubmit(handleBudGet)} className="w-72 mx-auto ">
          <Label>
            Insira o nome da pousada/hotel
            <Input
              type="text"
              placeholder={name}
              onBlur={handleName}
              ref={nameRef}
            />
          </Label>
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

          <Input className='mb-2' required type="number" {...register('price')} />

          <Dialog />
        </form>
      </div>
    </BudgetContext.Provider>
  );
}

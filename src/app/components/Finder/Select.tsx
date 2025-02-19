import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PROGRAMMING_LANGUAGES } from '@/constants';

export default function CardSelect({
  setLanguage,
}: {
  setLanguage: (value: string) => void;
}) {
  return (
    <Select onValueChange={(value) => setLanguage(value)}>
      <SelectTrigger className='w-[300px]'>
        <SelectValue placeholder='Select a Language' />
      </SelectTrigger>
      <SelectContent>
        {PROGRAMMING_LANGUAGES.map((language, index) => {
          return (
            <SelectItem key={index} value={language.value}>
              {language.title}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
}

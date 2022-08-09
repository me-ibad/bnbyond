import { useMutation, useQueryClient } from 'react-query';
import { fetchWrapper } from 'services/restApi';
import { toast } from 'react-toastify';
import ErrorService from 'services/formatError/ErrorService';
import { storeLocalData } from '../services/auth/localStorageData';
export const useCreateFacebookAccount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (body) => {
      return fetchWrapper('POST', `userAuth/registerByFb`, body);
    },
    {
      onSuccess: (data) => {
        if (data.status) {
          storeLocalData(data.data);
          toast.success('Du hast Dich erfolgreich angemeldet!');
        }
      },
      onError: (err) => {
        toast.error(ErrorService.uniformError(err));
      },
    }
  );
};

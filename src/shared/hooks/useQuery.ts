import { useMemo } from 'react'

export const useQuery = (param: any) => {
	return useMemo(() => new URLSearchParams(param), [param])
}

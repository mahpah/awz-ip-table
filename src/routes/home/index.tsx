import { FunctionalComponent, h } from 'preact'
import * as style from './style.css'
import { useEffect, useState } from 'preact/hooks'

type Prefix = {
  ip_prefix: string
  region: string
  service: string
  network_border_group: string
}

type Filter = {
  region?: string
  service?: string
  network_border_group?: string
}

const createFilterFn: (p: Filter) => (x: Prefix) => boolean = filter => {
  return (prefix: Prefix): boolean => {
    return (
      (!filter.network_border_group ||
        prefix.network_border_group === filter.network_border_group) &&
      (!filter.service || prefix.service === filter.service) &&
      (!filter.region || prefix.region === filter.region)
    )
  }
}

const getAvailableFilter = (list: Prefix[]): Record<string, string[]> => {
  const fields = ['region', 'service', 'network_border_group'] as Array<
    keyof Prefix
  >

  const a = fields
    .map(key => {
      const values = Array.from(new Set(list.map(x => x[key]))).sort()
      return { key, values }
    })
    .reduce(
      (memo, { key, values }) => ({
        ...memo,
        [key]: values
      }),
      {}
    )

  console.log(a)
  return a
}

const copyToClipboard = (str: string): void => {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}

const Home: FunctionalComponent = () => {
  const [list, setList] = useState<Prefix[]>([])
  const [filter, setFilter] = useState<Filter>({})
  const [filteredList, setFilteredList] = useState<Prefix[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [filterValue, setFilterValue] = useState<Record<string, string[]>>({})

  useEffect(() => {
    setLoading(true)
    let mounted = true
    fetch('https://ip-ranges.amazonaws.com/ip-ranges.json')
      .then(res => res.json())
      .then((data: { prefixes: Prefix[] }) => {
        if (!mounted) {
          return
        }

        setList(data.prefixes)
        setFilterValue(getAvailableFilter(data.prefixes))
        setLoading(false)
      })

    return () => (mounted = false)
  }, [])

  useEffect(() => {
    const filterFn = createFilterFn(filter)
    setFilteredList(list.filter(filterFn))
  }, [filter, list])

  const updateFilter = (field: keyof Filter) => (ev: any): void => {
    const target = ev.target as HTMLInputElement
    setFilter(x => ({
      ...x,
      [field]: target.value
    }))
  }

  const copyFiltered = (): void => {
    copyToClipboard(filteredList.map(x => x.ip_prefix).join('\n'))
  }

  return (
    <div class={style.home}>
      <h1>Home</h1>
      <p>Filter the ip addresses</p>

      <div>
        <label htmlFor="">network_border_group</label>
        <select
          value={filter.network_border_group || ''}
          onChange={updateFilter('network_border_group')}
        >
          <option value={''}>Please select one</option>
          {filterValue.network_border_group &&
            filterValue.network_border_group.map((o, i) => (
              <option value={o} key={i}>
                {o}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="">service</label>
        <select value={filter.service || ''} onChange={updateFilter('service')}>
          <option value={''}>Please select one</option>
          {filterValue.service &&
            filterValue.service.map((o, i) => (
              <option value={o} key={i}>
                {o}
              </option>
            ))}
        </select>
      </div>
      <div>
        <label htmlFor="">region</label>
        <select value={filter.region || ''} onChange={updateFilter('region')}>
          <option value={''}>Please select one</option>
          {filterValue.region &&
            filterValue.region.map((o, i) => (
              <option value={o} key={i}>
                {o}
              </option>
            ))}
        </select>
      </div>

      <div>
        <button onClick={copyFiltered}>Copy ip ranges</button>
      </div>

      {loading ? (
        <span>Loading...</span>
      ) : (
        <div class={style.ipList}>
          <ul>
            {filteredList.map((item, id) => (
              <li key={id}>
                {item.ip_prefix} -{' '}
                <em>
                  {item.service} - {item.region} - {item.network_border_group}
                </em>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Home

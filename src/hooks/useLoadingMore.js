import { useEffect, useState } from "react";

export function useLoadingMore(url) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { loadMore() }, []);

  const [subject, setSubject] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextUrl, setNextUrl] = useState(url);

  const loadMore = async () => {
    setLoading(true)
    const result = await fetch(nextUrl);
    const data = await result.json();
    setNextUrl(data.next);
    setSubject(subject.concat(data.results));
    setLoading(false);
  }

  return { subject, loading, nextUrl, loadMore }
}

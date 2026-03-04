export const STORAGE_KEYS = {
  USERS_DB: 'bloomwell_users_database',
  CURRENT_SESSION: 'bloomwell_current_session_email',
  USER_DATA: 'bloomwell_user_data',
  COMPLETED_TIPS: 'bloomwell_completed_tips',
  EVENTS: 'bloomwell_events',
  STREAK: 'bloomwell_streak',
  TIPS_CACHE: 'bloomwell_tips_cache',
  LAST_TIPS_DATE: 'bloomwell_last_tips_date',
  REGISTERED_ACTIVITIES: 'bloomwell_registered_activities',
  MATCHES: 'bloomwell_matches',
  PENDING_MATCHES: 'bloomwell_pending_matches'
};

export const saveToStorage = (key: string, data: any) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, JSON.stringify(data));
  }
};

export const getFromStorage = <T>(key: string): T | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const clearStorage = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  }
};

export const removeFromStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  }
};

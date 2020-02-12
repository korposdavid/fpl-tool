import Team from "./Team"

export default interface Player {
  id:               number;
  teamObject:       Team;
  code:             number;
  element_type:     number;
  event_points:     number;
  first_name:       string;
  form:             string;
  news:             string;
  now_cost:         number;
  photo:            string;
  points_per_game:  string;
  second_name:      string;
  status:           string;
  team:             number;
  total_points:     number;
  value_form:       string;
  value_season:     string;
  web_name:         string;
  minutes:          number;
  goals_scored:     number;
  assists:          number;
  clean_sheets:     number;
  goals_conceded:   number;
  own_goals:        number;
  penalties_saved:  number;
  penalties_missed: number;
  yellow_cards:     number;
  red_cards:        number;
  saves:            number;
  bonus:            number;
  bps:              number;
  influence:        string;
  creativity:       string;
  threat:           string;
  ict_index:        string;
}
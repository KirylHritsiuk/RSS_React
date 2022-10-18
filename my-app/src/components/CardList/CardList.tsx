import { CardCharacter, CardLocation, CardEpisode, Htag, Loader, Pagination } from 'components';
import React from 'react';
import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';
import { CardListState } from './CardList.state';
import { API } from 'interfaces/API';
import { Character } from 'interfaces/character.interface';
import { getResponseData } from './helpers/getResponseData';
import { APIError } from 'interfaces/error.interface';
import { isCharacter } from './helpers/isCharacter';
import { isLocation } from './helpers/isLocation';
export class CardList extends React.Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
    this.state = {
      character: [],
      loading: true,
      error: null,
      page: 1,
      totalPages: 0,
      prev: null,
      next: null,
    };
  }

  changePage = (url: string, page: number) => {
    this.setState((prevState) => ({ ...prevState, loading: true, page }));
    this.fetching(url);
  };

  fetching = async (url: string = this.props.url) => {
    try {
      const response = await fetch(url);
      const data: API | Character[] | Character | APIError = await response.json();
      this.setState((prevState) => ({ ...prevState, ...getResponseData(data) }));
    } catch (error) {
      const myError = error as Error;
      console.log('fetching', myError.message);
      this.setState({ error: myError.message });
    } finally {
      this.setState({ loading: false });
    }
  };

  async componentDidMount(): Promise<void> {
    await this.fetching();
  }

  async componentDidUpdate(prevProps: Readonly<CardListProps>): Promise<void> {
    if (this.props.url !== prevProps.url) {
      await this.fetching();
    }
  }

  render(): React.ReactNode {
    const { error, totalPages, character } = this.state;
    return (
      <>
        {error && (
          <Htag className={styles.error} tag="h2">
            {error}
          </Htag>
        )}
        <div className={styles.cardList}>
          {this.state.loading ? (
            <Loader />
          ) : (
            character.map((data) => {
              if (isCharacter(data)) {
                return <CardCharacter data={data} key={data.id} />;
              } else if (isLocation(data)) {
                return <CardLocation data={data} key={data.id} />;
              } else {
                return <CardEpisode data={data} key={data.id} />;
              }
            })
          )}
        </div>
        {!!totalPages && (
          <Pagination
            totalPages={this.state.totalPages}
            page={this.state.page}
            changePage={this.changePage}
            prev={this.state.prev}
            next={this.state.next}
          />
        )}
      </>
    );
  }
}

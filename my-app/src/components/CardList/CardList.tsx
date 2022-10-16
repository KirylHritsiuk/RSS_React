import { Card, Loader, Pagination } from 'components';
import React from 'react';
import { CardListProps } from './CardList.props';
import styles from './CardList.module.css';
import { CardListState } from './CardList.state';
import { API } from 'interfaces/API';
export class CardList extends React.Component<CardListProps, CardListState> {
  constructor(props: CardListProps) {
    super(props);
    this.state = {
      character: [],
      loading: true,
      error: '',
      page: 1,
      totalPages: 0,
      url: 'https://rickandmortyapi.com/api/character',
      prev: null,
      next: null,
    };
  }

  changePage = (url: string, page: number) => {
    this.setState((prevState) => ({ ...prevState, loading: true, page }));
    this.fetching(url);
  };

  // getPage = () => {
  //   const { prev } = this.state;
  //   if (prev) {
  //     const page = prev.match(/\d+$/g);
  //     if (page) {
  //       this.setState({ page: parseInt(page[0]) + 1 });
  //       console.log('page', page);
  //     }
  //   }
  // };

  fetching = async (url: string = this.state.url) => {
    try {
      const response = await fetch(url);
      const data: API = await response.json();
      this.setState({
        character: data.results,
        totalPages: data.info.pages,
        prev: data.info.prev,
        next: data.info.next,
      });
      // this.getPage();
      console.log(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  };

  async componentDidMount(): Promise<void> {
    this.fetching(this.state.url);
  }

  render(): React.ReactNode {
    return (
      <>
        <div className={styles.cardList}>
          {this.state.loading ? (
            <Loader />
          ) : (
            this.state.character.map((data) => <Card data={data} key={data.id} />)
          )}
        </div>
        <Pagination
          totalPages={this.state.totalPages}
          page={this.state.page}
          changePage={this.changePage}
          prev={this.state.prev}
          next={this.state.next}
        />
      </>
    );
  }
}

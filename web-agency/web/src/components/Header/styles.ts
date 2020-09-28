import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  flex: 1;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 2.5rem;
    width: 100vw;
    max-height: 5rem;
    background: var(--secondary);

    h1 {
      font: 700 1rem 'Open Sans';
    }

    nav {
      margin: 0.5rem 0;

      ul {
        display: none;
        list-style: none;
      }

      svg {
        cursor: pointer;
      }

      svg + svg {
        margin-left: 1rem;

        &:active {
          color: var(--quaternary);
        }
      }
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    border-top: 2px solid var(--white);
    width: 20rem;
    list-style: none;
    background: var(--secondary);

    a {
      width: 100%;

      li {
        padding: 1rem;
        border-bottom: 1px solid var(--white);
        font-size: 1.25rem;
        cursor: pointer;

        transition: background 0.2s;

        &:hover {
          background: var(--tertiary);
        }
      }
    }
  }

  @media (min-width: 400px) {
    div {
      h1 {
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1100px) {
    div {
      flex-direction: row;
      justify-content: space-between;

      h1 {
        margin-right: 10rem;
      }

      nav {
        display: flex;
        align-items: center;

        ul {
          display: flex;

          li {
            display: flex;
            align-items: center;
            padding: 0.5rem;
            font-size: 1.25rem;
            cursor: pointer;

            transition: background 0.2;

            &:hover {
              background: var(--tertiary);
            }
          }
        }

        > svg {
          margin-left: 1rem;
          order: 2;
        }

        svg + svg {
          display: none;
        }
      }
    }

    & > ul {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    div {
      nav {
        ul {
          li {
            padding: 1rem;
          }
        }
      }
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Accordion = ({ title, children }) => (
  <StyledAccordion>
    <Input type="checkbox" defaultChecked tabIndex={-1} />
    <Arrows />
    <Title>{title}</Title>
    <Content>{children}</Content>
  </StyledAccordion>
);

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const StyledAccordion = styled.article`
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;
  &:focus-within {
    & > section {
      opacity: 1;
      transform: translate(0, 0);
      max-height: 1000px;
    }
    & > span {
      &::before {
        transform: translate(-100%, 0) rotate(45deg);
      }
      &::after {
        transform: translate(100%, 0) rotate(-45deg);
      }
    }
  }
`;

const Input = styled.input`
  position: absolute;
  cursor: pointer;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  margin: 0;
  &:checked {
    & ~ section {
      /* Expand accordion content when checked */
    }
    & ~ span {
      /* Change arrow direction when checked */
    }
  }
`;

const Arrows = styled.span`
  position: absolute;
  margin-top: 12px;
  right: 0;
  &::before,
  &::after {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 2px;
    height: 7px;
    transition: transform 0.1s ease-out;
  }
  &::before {
    transform: translate(100%, 0) rotate(45deg);
  }
  &::after {
    transform: translate(-100%, 0) rotate(-45deg);
  }
`;

const Title = styled.h3`
  display: block;
  margin: 0;
  cursor: pointer;
`;

const Content = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 1rem;
  margin-top: 0;
  max-height: 0;
  opacity: 0;
  transform: translate(0, 50%);
  transition: all 0.3s ease-in-out;
  z-index: 2;
`;

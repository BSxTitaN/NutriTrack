"use client";

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import HomeInput from "../home/homesearch";

export function SearchBody() {
  const [nutritionData, setNutritionData]: any = useState([]);
  const [expandedCards, setExpandedCards]: any = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const toggleCardExpansion = (id: any) => {
    setExpandedCards((prev: any) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
        );
        setNutritionData(response.data.meals);
      } catch (error) {
        console.error("Error fetching nutrition data:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  console.log(nutritionData);

  const handleSearch = (searchQuery: string) => {
    setSearchTerm(searchQuery);
  };

  return (
    <HomeMain className="flex flex-1 flex-col items-center">
      <div className="mainSec">
        <div className="mutitle flex flex-col my-8">
          <h2 className="text-2xl">{"Your Search Result"}</h2>
        </div>
        <div className="w-full space-y-6">
          {nutritionData.map((item: any) => (
            <Card key={item.idMeal} className="w-full overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-grow p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {item.strMeal}
                    </h3>
                    <p className="text-gray-600 mb-2">
                      <strong>Category:</strong> {item.strCategory} |{" "}
                      <strong>Area:</strong> {item.strArea}
                    </p>
                    <p className="text-gray-600 mb-4">
                      <strong>Tags:</strong> {item.strTags || "N/A"}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => toggleCardExpansion(item.idMeal)}
                      className="mb-4"
                    >
                      {expandedCards[item.idMeal] ? (
                        <>
                          Hide Details <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          Show Details <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                    {expandedCards[item.idMeal] && (
                      <>
                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Instructions:</h4>
                          <p className="text-gray-600">
                            {item.strInstructions}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Ingredients:</h4>
                          <ul className="list-disc list-inside text-gray-600">
                            {Array.from({ length: 20 }, (_, i) => i + 1)
                              .map((i) => ({
                                ingredient: item[`strIngredient${i}`],
                                measure: item[`strMeasure${i}`],
                              }))
                              .filter((ing) => ing.ingredient)
                              .map((ing, index) => (
                                <li key={index}>
                                  {ing.measure} {ing.ingredient}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </>
                    )}
                    {item.strYoutube && (
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => window.open(item.strYoutube, "_blank")}
                      >
                        Watch on YouTube{" "}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <div className="md:w-1/3 h-full">
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <HomeInput onSearch={handleSearch} />
    </HomeMain>
  );
}

const HomeMain = styled.section`
  h2 {
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .midField {
    width: 90%;
    form {
      font-size: 0.8rem;
      margin-top: 1.5em;
      h3 {
        font-size: 0.9rem;
        cursor: pointer;
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }
      .name {
        margin-bottom: 1.2rem;
        p {
          font-size: 18;
          font-weight: 500;
          margin-bottom: 8px;
          color: #4a5568;
        }
        .icon {
          color: #4a5568;
          cursor: pointer;
          svg {
            width: 24px;
          }
        }
      }
      .sub {
        margin-top: 0.8rem;
        button {
          font-weight: 700;
          color: #e8e8e8;
          background-color: #101727;
          border-radius: 10px;
        }
        p {
          margin-top: 2em;
          color: red;
        }
      }
    }
  }

  .lfmfooter {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
    p {
      font-size: 0.9rem;

      span {
        font-size: 0.9rem;
        cursor: pointer;
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
